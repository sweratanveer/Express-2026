export default function login() {
    return `
    <form action="/submit" method="post">

        <input type="text" name="name" placeholder="enter name"/>
        <br>
        <br>
        <br>

        <input type="password" name="password" placeholder="enter password"/>
        <br>
<br> 
<br>
<br>
        <button type="submit">Login</button>

    </form>
    `;
}