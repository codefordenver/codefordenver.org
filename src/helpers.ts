import get from "lodash/get"

// Normalize data from contentful API
export function contentfulDataMapper(item: any, assets: Object[]) {
    const link = get(item, "fields.link")
    const title = get(item, "fields.title")
    const shortDescription = get(item, "fields.shortDescription")
    const thumbId = get(item, "fields.thumbnail.sys.id")
    const thumbnailAsset = assets.find((a: any) => get(a, "sys.id") === thumbId)
    const thumbnail = get(thumbnailAsset, "fields.file.url")

    return {
        link,
        title,
        thumbnail,
        shortDescription,
    }
}

export default { contentfulDataMapper }
