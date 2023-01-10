import m from "mithril";
/* eslint-disable no-undef, no-unused-vars, brace-style, max-len, padded-blocks, comma-spacing, semi, camelcase, space-before-function-paren */

const about = {
    view: () =>
    {
        return m( "div", [
            m( "h3", "Jobify, Find your ideal jobs" ),
            m( "m", "*** Demo of platsbanken clone app ***" ),
            m( "a", { href: "https://github.com/rezaapps" }, "Github: rezaapps" ),
            m( "br" ),
            m(
                "p",
                "Hybrid app build with Mithril js and Apache Cordova."
                + "Platforms: web, anddroid, ios."
            ),
            m( "p", "Jobify will help you find your ideal job." ),
            m( "p", "Testomonies: " ),
            m( "img", { src: "./img/borat.jpg" } ),
        ] );
    },
};

export default about;
