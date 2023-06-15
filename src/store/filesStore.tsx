import { makeAutoObservable, toJS } from 'mobx'
import { FileModel } from '../models/fileModel'
import { files } from './filesMock'

interface IFilesStore {
  query: string
  files: IFile[]
  add: ({ name, withChildren }: IAdd) => void
  remove: (id: string) => void
  rename: (id: string, name: string) => void
  setQuery: (query: string) => void
  searchResults: IFile[]
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

  get searchResults(): IFile[] {
    const searchResult = this.#searchItem(toJS(this.files))
    return searchResult
  }

  #searchItem(files: IFile[]): IFile[] {
    const searchResult: IFile[] = []

    files.forEach((file) => {
      if (file.name.includes(this.query)) {
        searchResult.push(file)
      }

      if (file.children?.length && file.children.length > 0) {
        this.#searchItem(file.children)
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

  // newly added items are not observable (try to add item and rename it)
  add({ name, withChildren, id }: IAdd) {
    const newFile = new FileModel({ name, withChildren })
    // const newFile: IFile = {
    //   name: name,
    //   id: crypto.randomUUID(),
    // }
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
