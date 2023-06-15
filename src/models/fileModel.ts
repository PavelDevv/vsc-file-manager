import { extendObservable } from 'mobx'

interface IProps {
  name: string
  type: FileType
}

export class FileModel implements IFile {
  name = ''
  id = ''
  type: FileType
  children?: IFile[] | undefined

  constructor({ name, type }: IProps) {
    this.name = name
    this.id = crypto.randomUUID()
    this.type = type
    if (type === 'folder') this.children = []
    extendObservable(this, {
      name: this.name,
      type: this.type,
      id: this.id,
      children: this.children,
    })
  }
}
