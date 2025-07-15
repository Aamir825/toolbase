import React from 'react'

export const handleCopy = async (text, setCopied, idx) => {
    try {
        await navigator.clipboard.writeText(text);
        setCopied(idx);
        setTimeout(() => setCopied(null), 1500);
    } catch (err) {
        console.error("Copy failed", err);
    }
};
