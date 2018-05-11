import HTTP from '../components/http-common'

export function saveAccess () {
  HTTP.post('?action=access')
}

export function saveCoupons () {
  const coupons = getCoupons()
  const ids = []
  for (let i = 0; i < coupons.length; i++) {
    const coupon = coupons[i]
    ids.push(coupon.id)
  }
  const url = ids.length ? ids.join(',') : 'none'
  HTTP.post('?action=coupons&coupons=' + ids.join(','))
}

export function saveCoupon (item) {
  let error = 0
  const localStorage = window.localStorage
  error = !localStorage ? 1 : 0
  const saved = localStorage.getItem('coupons')
  const coupons = saved ? JSON.parse(saved) : []
  error = (coupons.find(savedItem => savedItem.code === item.code)) ? 2 : error
  if (!error) {
    coupons.push(item)
    localStorage.setItem('coupons', JSON.stringify(coupons))
    saveCoupons()
  }
  return error
}

export function removeCoupon (item) {
  let error = 0
  const localStorage = window.localStorage
  const saved = localStorage.getItem('coupons')
  const coupons = JSON.parse(saved)
  const filtered = coupons.filter(savedItem => savedItem.code !== item.code)
  localStorage.setItem('coupons', JSON.stringify(filtered))
  saveCoupons()
  return error
}

export function getCoupons () {
  const localStorage = window.localStorage
  const saved = localStorage.getItem('coupons')
  const coupons = saved ? JSON.parse(saved) : []
  return coupons
}
