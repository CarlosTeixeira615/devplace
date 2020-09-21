//custom types
import React from 'react'

/// <reference types="react-scripts" />

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      backgroundColor?: string;
      hover?: string;
    }
}