import { extendObservable } from 'mobx'

interface IProps {
  name: string
  withChildren?: boolean
}

export class FileModel implements IFile {
  name = ''
  id = ''
  children?: IFile[] | undefined

  constructor({ name, withChildren }: IProps) {
    this.name = name
    this.id = crypto.randomUUID()
    if (withChildren === true) this.children = []
    extendObservable(this, { name: this.name, id: this.id, children: this.children })
  }
}
