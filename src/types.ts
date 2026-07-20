/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageType = 'home' | 'menu' | 'storia' | 'contatti';

export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'antipasti' | 'primi' | 'secondi' | 'dolci';
  tags?: string[];
}

export interface ContactFormType {
  name: string;
  email: string;
  subject: string;
  message: string;
}
