import {requests} from './requests'


export function getCategory() {
  return requests({
    url: '/category'
  })
}
export function getSubcategory(maitKey) {
    return requests({
      url: '/subcategory',
      params: {
        maitKey
      }
    })
  }
  export function getCategoryDetail(miniWallkey, type) {
    return request({
      url: '/subcategory/detail',
      params: {
        miniWallkey,
        type
      }
    })
  }