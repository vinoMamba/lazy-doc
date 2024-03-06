import { decrypt, encrypt } from 'crypto-js/aes'
import UTF8 from 'crypto-js/enc-utf8'

 class Encryption {

  private key: string
  constructor(key: string) {
    this.key = key
  }

  encryptByAES(value: string) {
    return encrypt(value, this.key).toString()
  }

  decryptByAES(value: string) {
    return decrypt(value, this.key).toString(UTF8)
  }
}

export const crypto = new Encryption('123456')
