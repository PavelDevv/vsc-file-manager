// max nesting level is 5

export const files: IFile[] = [
  { name: 'rndm file.exe', id: crypto.randomUUID() },
  {
    name: 'Random folder',
    id: crypto.randomUUID(),
    children: [
      { name: 'img.jpeg', id: crypto.randomUUID() },
      { name: 'icon.svg', id: crypto.randomUUID() },
      {
        name: 'nested folder',
        id: crypto.randomUUID(),
        children: [
          { name: 'script.bat', id: crypto.randomUUID() },
          { name: 'afaw.exe', id: crypto.randomUUID() },
          { name: 'wwr.exe', id: crypto.randomUUID() },
          {
            name: 'folder 1',
            id: crypto.randomUUID(),
            children: [
              {
                name: 'foldr 2',
                id: crypto.randomUUID(),
                children: [
                  { name: 'wwer.eep', id: crypto.randomUUID() },
                  { name: '1.ssl', id: crypto.randomUUID() },
                  { name: 'awefwf.eer', id: crypto.randomUUID() },
                ],
              },
              { name: 'file.file', id: crypto.randomUUID() },
            ],
          },
        ],
      },
      { name: 'qa.txt', id: crypto.randomUUID() },
      { name: 'rt.txt', id: crypto.randomUUID() },
    ],
  },
  {
    name: 'documents',
    id: crypto.randomUUID(),
    children: [
      { name: 'ticket.pdf', id: crypto.randomUUID() },
      { name: 'ticket2.pdf', id: crypto.randomUUID() },
      { name: 'scan.jpeg', id: crypto.randomUUID() },
    ],
  },
  { name: 'photo.jpeg', id: crypto.randomUUID() },
  { name: 'aeer.dll', id: crypto.randomUUID() },
  { name: 'awefwer', id: crypto.randomUUID() },
  {
    name: 'sfad',
    id: crypto.randomUUID(),
    children: [
      { name: 'gfbr', id: crypto.randomUUID() },
      { name: 'xcvb', id: crypto.randomUUID() },
      { name: 'q3r', id: crypto.randomUUID() },
      { name: 'khjil', id: crypto.randomUUID() },
    ],
  },
  { name: 'rbw', id: crypto.randomUUID() },
  { name: 'q2r', id: crypto.randomUUID() },
  { name: 'j5y86o', id: crypto.randomUUID() },
]
