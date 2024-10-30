
class MyValidation{
    removeDiacritics(str: string) {
        return str
            .normalize('NFD') // Chuyển đổi sang dạng chuẩn NFD
            .replace(/[\u0300-\u036f]/g, ''); // Loại bỏ dấu
    } 
    generateRandomEmail(domain:string) {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let username = '';
    
        const length = Math.floor(Math.random() * 6) + 5; 
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            username += characters[randomIndex];
        }
    
        const email = `${username}@${domain}`;
        return email;
    }
}

export default new MyValidation();