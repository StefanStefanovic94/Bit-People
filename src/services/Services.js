export const FetchCandidates=(url)=>{
    return fetch(url).then((response) =>response.json())
}