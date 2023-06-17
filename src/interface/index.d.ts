type FileType = 'file' | 'folder'
type Theme = 'DARK' | 'LIGHT'

interface IFile {
  name: string
  id: string
  type: FileType
  children?: IFile[]
}

interface IThemes {
  [key: string]: ITheme
}

interface ITheme {
  [key: string]: string
}
