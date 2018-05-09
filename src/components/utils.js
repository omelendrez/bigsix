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
  return error
}

export function getCoupons () {
  const localStorage = window.localStorage
  const saved = localStorage.getItem('coupons')
  const coupons = saved ? JSON.parse(saved) : []
  return coupons
}
