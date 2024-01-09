import { indexPeUrl, sampleItem } from '$lib'
export async function load(){
  const url = indexPeUrl[0] + sampleItem + indexPeUrl[1]
  const res = await fetch(url).then(r => r.json())
  return { res }
}
