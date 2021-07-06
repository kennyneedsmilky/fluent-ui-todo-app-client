const About = (props) => {
    return ( 
        <div>
            <h2>{props.language === "en" ? "About Fluent UI Todo App" : "このアプリについて"}</h2>
            <p>{props.language === "en" 
            ? "I (Kenneth Fullbright) made this app in order to show the power of React and Fluent UI. It was made with React, React-DOM-Router, NodeJS and, Fluent UI. I added extra features like saving to local storage and changing the UI language from English to Japanese. This is a real working app and I encourage everyone to try it!"
            : "僕（フルブライト ケネス）はReact(リアクト)とマイクロソフトのフルエントUIの力を見せるためにこのアプリを作りました。このアプリを React、React-DOM-Router、NodeJS と FluentUIで作成しました。ローカルストレージへの保存やUI言語を英語から日本語に変更などのフィーチャーを追加しました。このアプリが使えるし、試してみるのを勧めます！ "}
            </p>
        </div>
    );
}
 
export default About;