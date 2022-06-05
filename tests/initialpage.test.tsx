/* eslint-disable testing-library/render-result-naming-convention */
import { render } from '@testing-library/react';
import InitialPage from '../src/pages/inicio'


test('test', () => {
    const screen = render(<InitialPage />);
    expect(screen.getByText('freelance')).toBeTruthy();

})