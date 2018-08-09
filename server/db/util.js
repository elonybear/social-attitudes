let TYPES = ['USER', 'BOT', 'ALL']

export var getWhereForUserType = (type) => {
  switch(type) {
    case 'BOT':
      return "WHERE bot = true";
    case 'USER':
      return "WHERE bot = false";
    case 'ALL':
      return "WHERE bot = true OR bot = false";
  }
}
