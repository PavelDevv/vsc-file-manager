import { extendObservable } from 'mobx'

interface IProps {
  name: string
  type: FileType
  children?: IFile[]
}

export class FileModel implements IFile {
  name = ''
  id = ''
  type: FileType
  children?: IFile[] | undefined

  constructor({ name, type, children }: IProps) {
    this.type = type
    this.name = name
    this.id = crypto.randomUUID()
    if (type === 'folder') this.children = children || []
    extendObservable(this, {
      name: this.name,
      type: this.type,
      id: this.id,
      children: this.children,
      sortedChildren: this.sortedChildren,
    })
  }

  get sortedChildren(): IFile[] | undefined {
    if (this.children === undefined) return undefined

    this.children.sort((firstFile, secondFile) => {
      if (firstFile.type === 'folder' && secondFile.type === 'file') {
        return -1
      }

      if (firstFile.type === secondFile.type) {
        if (firstFile.name < secondFile.name) {
          return -1
        }
        if (firstFile.name > secondFile.name) {
          return 1
        }
        return 0
      }
      return 0
    })

    return this.children
  }
}
