import get from 'lodash/get';

// Normalize data from contentful API
export function contentfulDataMapper(item: any, assets: Object[]) {
  const link = get(item, 'fields.link');
  const title = get(item, 'fields.title');
  const shortDescription = get(item, 'fields.shortDescription');
  const partner = get(item, 'fields.partner');
  const tech = get(item, 'fields.tech');
  const description = get(item, 'fields.description');
  const thumbId = get(item, 'fields.thumbnail.sys.id');
  const thumbnailAsset = assets.find((a: any) => get(a, 'sys.id') === thumbId);
  const thumbnail = get(thumbnailAsset, 'fields.file.url');
  const screenShotArray = get(item, 'fields.screenShots');
  const screenShotIds = screenShotArray.map((shot: any) => shot.sys.id);
  const screenShotsAssets = screenShotIds.map((screenShotsId: any) => {
    return assets.find((a: any) => get(a, 'sys.id') === screenShotsId);
  });
  const screenShots = screenShotsAssets.map((asset: any) =>
    get(asset, 'fields.file.url')
  );

  return {
    link,
    title,
    thumbnail,
    shortDescription,
    description,
    partner,
    screenShots,
    tech
  };
}

export default { contentfulDataMapper };
