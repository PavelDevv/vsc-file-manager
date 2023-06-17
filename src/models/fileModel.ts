import { extendObservable } from 'mobx'
import { sortFiles } from 'utils'

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

    if (type === 'folder') {
      if (children?.length) {
        this.children = children
        sortFiles(this.children)
      } else {
        this.children = []
      }
    }

    extendObservable(this, {
      name: this.name,
      type: this.type,
      id: this.id,
      children: this.children,
    })
  }
}
