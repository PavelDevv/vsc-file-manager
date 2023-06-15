import { FileModel } from 'models/fileModel'

export const files: IFile[] = [
  new FileModel({ name: 'rndm file.exe', type: 'file' }),
  new FileModel({
    name: 'Random folder',
    type: 'folder',
    children: [
      new FileModel({ name: 'img.jpeg', type: 'file' }),
      new FileModel({ name: 'icon.svg', type: 'file' }),
      new FileModel({
        name: 'nested folder',
        type: 'folder',
        children: [
          new FileModel({ name: 'script.bat', type: 'file' }),
          new FileModel({ name: 'afaw.exe', type: 'file' }),
          new FileModel({ name: 'wwr.exe', type: 'file' }),
          new FileModel({
            name: 'folder 1',
            type: 'folder',
            children: [
              new FileModel({
                name: 'foldr 2',
                type: 'folder',
                children: [
                  new FileModel({ name: 'wwer.eep', type: 'file' }),
                  new FileModel({ name: '1.ssl', type: 'file' }),
                  new FileModel({ name: 'awefwf.eer', type: 'file' }),
                ],
              }),
              new FileModel({ name: 'file.file', type: 'file' }),
            ],
          }),
        ],
      }),
      new FileModel({ name: 'qa.txt', type: 'file' }),
      new FileModel({ name: 'rt.txt', type: 'file' }),
    ],
  }),
  new FileModel({
    name: 'documents',
    type: 'folder',
    children: [
      new FileModel({ name: 'ticket.pdf', type: 'file' }),
      new FileModel({ name: 'ticket2.pdf', type: 'file' }),
      new FileModel({ name: 'scan.jpeg', type: 'file' }),
    ],
  }),
  new FileModel({ name: 'photo.jpeg', type: 'file' }),
  new FileModel({ name: 'aeer.dll', type: 'file' }),
  new FileModel({ name: 'awefwer', type: 'file' }),
  new FileModel({
    name: 'sfad',
    type: 'folder',
    children: [
      new FileModel({ name: 'gfbr', type: 'file' }),
      new FileModel({ name: 'xcvb', type: 'file' }),
      new FileModel({ name: 'q3r', type: 'file' }),
      new FileModel({ name: 'khjil', type: 'file' }),
    ],
  }),
  new FileModel({ name: 'rbw', type: 'file' }),
  new FileModel({ name: 'q2r', type: 'file' }),
  new FileModel({ name: 'j5y86o', type: 'file' }),
]
