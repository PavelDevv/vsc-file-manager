// max nesting level is 5

export const files: IFile[] = [
  { name: 'rndm file.exe', type: 'file', id: crypto.randomUUID() },
  {
    name: 'Random folder',
    id: crypto.randomUUID(),
    type: 'folder',
    children: [
      { name: 'img.jpeg', type: 'file', id: crypto.randomUUID() },
      { name: 'icon.svg', type: 'file', id: crypto.randomUUID() },
      {
        name: 'nested folder',
        id: crypto.randomUUID(),
        type: 'folder',
        children: [
          { name: 'script.bat', type: 'file', id: crypto.randomUUID() },
          { name: 'afaw.exe', type: 'file', id: crypto.randomUUID() },
          { name: 'wwr.exe', type: 'file', id: crypto.randomUUID() },
          {
            name: 'folder 1',
            id: crypto.randomUUID(),
            type: 'folder',
            children: [
              {
                name: 'foldr 2',
                id: crypto.randomUUID(),
                type: 'folder',
                children: [
                  { name: 'wwer.eep', type: 'file', id: crypto.randomUUID() },
                  { name: '1.ssl', type: 'file', id: crypto.randomUUID() },
                  { name: 'awefwf.eer', type: 'file', id: crypto.randomUUID() },
                ],
              },
              { name: 'file.file', type: 'file', id: crypto.randomUUID() },
            ],
          },
        ],
      },
      { name: 'qa.txt', type: 'file', id: crypto.randomUUID() },
      { name: 'rt.txt', type: 'file', id: crypto.randomUUID() },
    ],
  },
  {
    name: 'documents',
    id: crypto.randomUUID(),
    type: 'folder',
    children: [
      { name: 'ticket.pdf', type: 'file', id: crypto.randomUUID() },
      { name: 'ticket2.pdf', type: 'file', id: crypto.randomUUID() },
      { name: 'scan.jpeg', type: 'file', id: crypto.randomUUID() },
    ],
  },
  { name: 'photo.jpeg', type: 'file', id: crypto.randomUUID() },
  { name: 'aeer.dll', type: 'file', id: crypto.randomUUID() },
  { name: 'awefwer', type: 'file', id: crypto.randomUUID() },
  {
    name: 'sfad',
    id: crypto.randomUUID(),
    type: 'folder',
    children: [
      { name: 'gfbr', type: 'file', id: crypto.randomUUID() },
      { name: 'xcvb', type: 'file', id: crypto.randomUUID() },
      { name: 'q3r', type: 'file', id: crypto.randomUUID() },
      { name: 'khjil', type: 'file', id: crypto.randomUUID() },
    ],
  },
  { name: 'rbw', type: 'file', id: crypto.randomUUID() },
  { name: 'q2r', type: 'file', id: crypto.randomUUID() },
  { name: 'j5y86o', type: 'file', id: crypto.randomUUID() },
]
