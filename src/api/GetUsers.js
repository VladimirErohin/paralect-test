export class UsersService{
    static async  getUser(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}`)
            .then(userInfo => userInfo.json())
            .then(userInfo =>userInfo)
        return response
    }
    static async  getPages(userName, page, perPage) {
        const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${perPage}&page=${page}`)
            .then(pages => pages.json())
            .then(pages =>pages)
        return response
    }

}