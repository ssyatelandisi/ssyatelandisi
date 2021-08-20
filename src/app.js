const randomNum = (num) => parseInt(Math.random() * num)
const randomStr = (num) => {
  /**
  * 返回1~num以内长度的随机字符 
  * @param num 长度
  * @return str 返回字符串
  */
  const src = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
  let s = ''
  for (let i = 0; i < 1 + randomNum(num); i++) {
    s += src[randomNum(src.length)]
  }
  return s
}
const encrypt = (content, key = 'birthday') => {
  const content_buf = new Buffer.from(content)
  const key_buf = new Buffer.from(key)
  const enc_buf = content_buf.map((e, i) => e ^ key_buf[i % key.length])
  return new Buffer.from(enc_buf).toString('base64').replace(/=+/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}
const decrypt = (content, key = 'birthday') => {
  const enc_buf = new Buffer.from(content.replace(/-/g, '+').replace(/_/g, '/'), 'base64')
  const key_buf = new Buffer.from(key)
  const dec_buf = enc_buf.map((e, i) => e ^ key_buf[i % key.length])
  return new Buffer.from(dec_buf).toString()
}
export { randomNum, randomStr, encrypt, decrypt }
