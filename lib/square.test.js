const Square = require('./square'); //Quick fix for "require"?


describe('square', () => {
    test('renders correctly', () => {
        const shape= new Square ();
            var color = ('blue')
            shape.setColor(color);
        expect(shape.render()).toBe( <svg width="250" height="250">
        <polygon cx="125" cy="125" r="100" fill="blue" />
        <text x="50%" y="50%" text-anchor="middle" fill="red" font-size="60px" font-family="Arial" dy=".3em">lll</text>
        </svg>)
    });
});

