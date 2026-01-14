function someFunction() {
    // other code
    try { setTimeout(showSuggestionBoxIfAppropriate, 3900000); } catch(e){ /* ignore if not present */ }
    // other code
}