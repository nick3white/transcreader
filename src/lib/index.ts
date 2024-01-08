// place files you want to import through the `$lib` alias in this folder.
import type { CortexItemData } from './types';
export const sampleItem = '2KXJ8Z44DMZ5';

const indexPeUrl = [
  'https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=',
  '&PackageFields=SystemIdentifier,Title,new.Context,Link,new.Link-2&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json'
];
const itemPeUrl = [
  'https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=',
  '&PackageFields=Title,MediaEncryptedIdentifier,Document.IIIFV3ID&RepresentativeFields=MediaEncryptedIdentifier,MaxWidth,MaxHeight&ContentFields=MediaEncryptedIdentifier,CoreField.IIIFResourceType,new.User-Generated-Transcription,MaxWidth,MaxHeight&format=json'
];

export async function getItem(id: string, key: string) {
  // const usableid = id || sampleItem
  const usableid = sampleItem;
  console.log(usableid);
  const itemApiUrl = itemPeUrl[0] + usableid + itemPeUrl[1] + '&token=' + key;
  // console.log(itemApiUrl)

  const itemApiData: CortexItemData = await fetch(itemApiUrl).then((r) => r.json());

  const item = {
    title: itemApiData.APIResponse.Title,
    apiurl: itemApiUrl,
    iiifurl: itemApiData.APIResponse["Document.IIIFV3ID"],
    cover: {
      image: itemApiData.APIResponse.Representative.MediaEncryptedIdentifier,
      width: itemApiData.APIResponse.Representative.MaxWidth,
      height: itemApiData.APIResponse.Representative.MaxHeight
    },
    pages: itemApiData.APIResponse.Content.map((page) => ({
      image: page.MediaEncryptedIdentifier,
      text: page['new.User-Generated-Transcription'],
      width: page.MaxWidth,
      height: page.MaxHeight
    }))
  };

  // return itemApiData
  return item;
}
export function moveMagnifier(
  e: Event,
  w: number,
  h: number,
  img: HTMLImageElement,
  glass: HTMLElement,
  bw: number,
  zoom: number
) {
  let pos, x, y;
  e.preventDefault();
  pos = getCursorPos(e, img);
  x = pos.x;
  y = pos.y;

  if (x > img.width - w / zoom) {
    x = img.width - w / zoom;
  }
  if (x < w / zoom) {
    x = w / zoom;
  }
  if (y > img.height - h / zoom) {
    y = img.height - h / zoom;
  }
  if (y < h / zoom) {
    y = h / zoom;
  }

  glass.style.left = x - w + 'px';
  glass.style.top = y - h + 'px';
  /* Display what the magnifier glass "sees": */
  glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
}
export function getCursorPos(e: Event, img: HTMLImageElement) {
  let a,
    x = 0,
    y = 0;
  e = e || window.event;

  // Check for pageX/pageY properties, falling back to clientX/clientY if needed
  x = e.pageX || e.clientX;
  y = e.pageY || e.clientY;

  /* Get the x and y positions of the image: */
  a = img.getBoundingClientRect();

  x = x - a.left;
  y = y - a.top;

  /* Consider any page scrolling: */
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;

  return { x: x, y: y };
}
