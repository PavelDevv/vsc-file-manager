import { makeAutoObservable } from 'mobx'
import { FileModel } from 'models/fileModel'
import { sortFiles } from 'utils'
// import { files } from './filesMock'
import { files } from './filesHugeMock'

interface IFilesStore {
  query: string
  files: IFile[]
  add: ({ name, type, id }: IAdd) => void
  remove: (id: string) => void
  rename: ({ id, name, withSort }: IRename) => void
  setQuery: (query: string) => void
  searchResults: IFile[] | undefined
  totalFilesCount: number
}

interface IAdd {
  name: string
  id: string
  type: FileType
}

interface IRename {
  id: string
  name: string
  withSort: boolean
}

class FilesStore implements IFilesStore {
  query = ''
  files: IFile[] = files

  constructor() {
    makeAutoObservable(this, {}, { deep: true })
  }

  get searchResults(): IFile[] | undefined {
    if (!this.query.length) return undefined
    const searchResult = this.#searchItems(this.files)
    return searchResult
  }

  get totalFilesCount(): number {
    return this.#countItems(this.files)
  }

  #countItems(files: IFile[]): number {
    let count = 0

    files.forEach((item) => {
      count++
      if (item.children?.length) count += this.#countItems(item.children)
    })

    return count
  }

  #searchItems(files: IFile[]): IFile[] {
    const searchResult: IFile[] = []

    files.forEach((file) => {
      if (file.name.toLowerCase().includes(this.query.toLowerCase())) {
        const copy = {
          ...file,
          children: undefined,
        }
        searchResult.push(copy)
      }

      if (file.children?.length && file.children.length > 0) {
        const res = this.#searchItems(file.children as IFile[])
        searchResult.push(...res)
      }
    })

    return searchResult
  }

  #getItem(
    id: string,
    files: IFile[],
    callback: (file: IFile, index: number, files: IFile[]) => void,
  ) {
    for (let i = 0; i < files.length; i++) {
      if (files[i].id === id) {
        callback(files[i], i, files)
      } else if (files[i].children !== undefined && files[i].children?.length) {
        this.#getItem(id, files[i].children as IFile[], callback)
      }
    }
  }

  add({ name, type, id }: IAdd) {
    const newFile = new FileModel({ name, type })
    this.#getItem(id, this.files, (file) => {
      if (type === 'folder') {
        file.children?.unshift(newFile)
      } else {
        file.children?.push(newFile)
      }
    })
  }

  remove(id: string) {
    this.#getItem(id, this.files, (_file, index, files) => files.splice(index, 1))
  }

  rename({ id, name, withSort }: IRename) {
    this.#getItem(id, this.files, (file, _index, files) => {
      file.name = name
      if (withSort) sortFiles(files)
    })
  }

  setQuery(query: string) {
    this.query = query
  }
}

export default new FilesStore()
