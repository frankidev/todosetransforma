import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from 'node:test';
import DashboardIndexPage from '@/pages/dashboard';

describe('Describe our dashboard page', () => {
    it('Should render properly', () => {
        render(<DashboardIndexPage />);

        const header = screen.getByRole('heading');
        const headerText = "Hello World";

        expect(header).toHaveTextContent(headerText)
    })
})