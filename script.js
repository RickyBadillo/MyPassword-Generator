const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>']

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const getOptions = () => {
  const length = parseInt(prompt('Choose a number between 8 and 128 for a password'))

  if (length < 8 || length > 128 || Number.isNanN(length)) {
    alert('Invalid Password length')
    return null
  }

  const hasSpecialChar = confirm('Select OK to include special characters in password')
  const hasNumbers = confirm('Select OK to include numbers in password')
  const hasLowercase = confirm('Select OK to include lowercase in password')
  const hasUppercase = confirm('Select OK to include uppercase characters in password')

  if (!hasSpecialChar && !hasNumbers && !hasLowercase && !hasUppercase) {
    alert('Choose at least one character type')
    return null
  }

  return { length, hasSpecialChar, hasNumbers, hasLowercase, hasUppercase }
}

const getRandom = arr => arr[Math.floor(Math.random() * arr.length)]

const getPassword = () => {
  const options = getOptions()
  let passwordArr = []
  let canHaves = []
  let mustHaves = []

  if (options.hasSpecialChar) {
    canHaves = canHaves.concat(specialChar)
    mustHaves.push(getRandom(specialChar))
  }

  if (options.hasNumbers) {
    canHaves = canHaves.concat(numbers)
    mustHaves.push(getRandom(numbers))
  }

  if (options.hasLowercase) {
    canHaves = canHaves.concat(lowercase)
    mustHaves.push(getRandom(lowercase))
  }

  if (options.hasUppercase) {
    canHaves = canHaves.concat(uppercase)
    mustHaves.push(getRandom(uppercase))
  }

  for (let i = 0; i < options.length; i++) {
    passwordArr.push(getRandom(canHaves))
  }

  for (let i = 0; i < mustHaves.length; i++) {
    passwordArr[i] = mustHaves[i]
  }

  return passwordArr.join('')
}

document.getElementById('generate').addEventListener('click', () => {
  const password = getPassword()
  document.getElementById('password').value = password
})
