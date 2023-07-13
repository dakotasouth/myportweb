// create a typescript type called Post that has an id, title, and body

export type Post = {
    id: number,
    title: string,
    body: string,
}

export type PostPreview = {
    title: string
    description: string
    previewImage: string
    slug: string
}