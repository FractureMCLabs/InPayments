//main.js
console.log('Kód spuštěn')
import { watchAccount, disconnect, getAccount } from '/@wagmi/core/dist/esm/actions';
console.log('Import tříd úspěšný')
function connect() {
  if (getAccount(config).isConnected) {
    disconnect(config)
  } else {
    modal.open()
  }
}

const btnEl = document.getElementById('btn')
const userEl = document.getElementById('user')

btnEl.addEventListener('click', connect)

// listening for account changes
watchAccount(config,
  {
    onChange(account) {
      userEl.innerText = account.address ?? ''
      if (account.isConnected) {
        btnEl.innerText = 'Disconnect'
      } else {
        btnEl.innerText = 'Connect'
      }
    }
  })
