type FileType = 'file' | 'folder'

interface IFile {
  name: string
  id: string
  children?: IFile[]
}
