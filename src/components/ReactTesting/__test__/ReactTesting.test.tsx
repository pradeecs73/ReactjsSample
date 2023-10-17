import { render, screen ,fireEvent} from '@testing-library/react';
import ReactTesting from '../ReactTesting';

describe("Header", () => {
    it('should render same text passed into title prop', () => {
        render(
            <ReactTesting 
              title="todo"
            />
        );
        const h1Element = screen.getByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
        const h1Element1 = screen.queryByText(/todo/i);
        expect(h1Element1).toBeInTheDocument();
    });

    it('should check for label', () => {
        render(
            <ReactTesting 
              title="todo"
            />
        );
        const h1Element = screen.getByLabelText('Username');
        expect(h1Element).toBeInTheDocument();
        const h1Element1 = screen.getByPlaceholderText('Username');
        expect(h1Element1).toBeInTheDocument();
        const h1Element2 = screen.getByRole('spinbutton');
        expect(h1Element2).toBeInTheDocument();
        const h1Element3 = screen.getByTestId('custom-element');
        expect(h1Element3).toBeInTheDocument();
    });

    it('should check for event change of text change', () => {
        render(
            <ReactTesting 
              title="todo"
            />
        );

        const h1Element= screen.getByTestId('city-test');
        fireEvent.change(h1Element, { target: { value: "mysore" } });
        const h1Element2 = screen.getByText(/mysore/i);
        expect(h1Element2).toBeInTheDocument();
    });

    it('should trigger a method on button click', () => {
        render(
            <ReactTesting 
              title="todo"
            />
        );

        const h1Element1= screen.getByTestId('city-test');
        fireEvent.change(h1Element1, { target: { value: "mysore" } });
        const h1Element2= screen.getByTestId('city-textbutton');
        fireEvent.click(h1Element2);
        const h1Element3 = screen.queryByText(/mysore/i);
        expect(h1Element3).not.toBeInTheDocument();
        const h1Element4 = screen.getByText(/bangalore/i);
        expect(h1Element4).toBeInTheDocument();  
    });

})