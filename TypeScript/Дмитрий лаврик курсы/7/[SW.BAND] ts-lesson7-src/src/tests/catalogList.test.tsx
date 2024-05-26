import CatalogList from "../views/CatalogList";
import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, expect, test } from 'vitest'
import apiContext from "../context/apiContext";
import { TApi } from "../api";
import { RecPartial } from "../types/utility";

const fakeApi: RecPartial<TApi> = {
	products: {
		async all(){
			return [
				{ id: 1, title: 'abc', price: 1000, rest: 1 },
				{ id: 2, title: 'qwerty', price: 1000, rest: 1 }
			];
		}
	}
}

beforeEach(async () => {
	render(
		<apiContext.Provider value={fakeApi as TApi}>
			<CatalogList />
		</apiContext.Provider>
	);

	await waitFor(() => expect(screen.getByText(/Items/i)).toBeDefined(), {
		timeout: 5000
	})
})

test('CatalogList', () => {
	expect(screen.getByText(/Items in catalog/i)).toBeDefined();
	expect(screen.getByText(/abc/i)).toBeDefined();
	expect(screen.getByText(/qwerty/i)).toBeDefined();
	expect(screen.getByText('20')).toBeDefined();
})

