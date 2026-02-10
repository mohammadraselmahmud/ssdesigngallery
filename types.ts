
import React from 'react';

export interface DesignItem {
  id: string;
  title: string;
  category: 'Gate' | 'Railing' | 'Grill' | 'Furniture';
  imageUrl: string;
  priceRange: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
