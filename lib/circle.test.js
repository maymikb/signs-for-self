
const { describe } = require("node:test");  //redundant?



describe('circle', () => {
    test('renders correctly', () => {
        const shape= new circle ();
            var color = ('green')
            shape.setColor(color);
        expect(shape.render()).toBe( <svg width="250" height="250">
        <circle cx="125" cy="125" r="100" fill="brown" />
        <text x="50%" y="50%" text-anchor="middle" fill="purple" font-size="60px" font-family="Arial" dy=".3em">her</text>
    </svg>);
    });
});