import { makeAutoObservable } from 'mobx'
import { FileModel } from 'models/fileModel'
import { files } from './filesMock'

interface IFilesStore {
  query: string
  files: IFile[]
  add: ({ name, withChildren }: IAdd) => void
  remove: (id: string) => void
  rename: (id: string, name: string) => void
  setQuery: (query: string) => void
  searchResults: IFile[] | undefined
}

interface IAdd {
  name: string
  id: string
  withChildren?: boolean
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

  #searchItems(files: IFile[]): IFile[] {
    const searchResult: IFile[] = []

    files.forEach((file) => {
      if (file.name.toLowerCase().includes(this.query.toLowerCase())) {
        searchResult.push(file)
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

  add({ name, withChildren, id }: IAdd) {
    const newFile = new FileModel({ name, withChildren })
    this.#getItem(id, this.files, (file) => file.children?.push(newFile))
  }

  remove(id: string) {
    this.#getItem(id, this.files, (_file, index, files) => files.splice(index, 1))
  }

  rename(id: string, name: string) {
    this.#getItem(id, this.files, (file) => (file.name = name))
  }

  setQuery(query: string) {
    this.query = query
  }
}

export default new FilesStore()
