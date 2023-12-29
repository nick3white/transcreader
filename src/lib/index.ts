// place files you want to import through the `$lib` alias in this folder.
import type { CortexItemData } from './types'
export const sampleItem = '2KXJ8Z44DMZ5'

const indexPeUrl = [
  "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
  "&PackageFields=SystemIdentifier,Title,new.Context,Link,new.Link-2&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json",
];
const itemPeUrl = [
  "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
  "&PackageFields=Title&RepresentativeFields=MediaEncryptedIdentifier,MaxWidth,MaxHeight&ContentFields=MediaEncryptedIdentifier,CoreField.IIIFResourceType,new.User-Generated-Transcription,MaxWidth,MaxHeight&format=json",
];

export async function getItem(id: string, key: string) {
  // const usableid = id || sampleItem
  const usableid = sampleItem
  console.log(usableid)
  const itemApiUrl = itemPeUrl[0] + usableid + itemPeUrl[1] + '&token=' + key
  // console.log(itemApiUrl)

  const itemApiData: CortexItemData = await fetch(itemApiUrl).then(r => r.json())

  const item = {
    title: itemApiData.APIResponse.Title,
    cover: { image: itemApiData.APIResponse.Representative.MediaEncryptedIdentifier, width: itemApiData.APIResponse.Representative.MaxWidth, height: itemApiData.APIResponse.Representative.MaxHeight },
    pages: itemApiData.APIResponse.Content.map(page => ({
      image: page.MediaEncryptedIdentifier,
      text: page['new.User-Generated-Transcription'],
      width: page.MaxWidth,
      height: page.MaxHeight
    }))
  }

  // return itemApiData
  return item

}
