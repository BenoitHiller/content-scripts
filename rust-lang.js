/**
 * Rust-lang docs
 *
 * Fixes:
 * 1. Inserts a line break in method signatures to display better in narrow column.
 */
var methods = $(".fqn + pre");
methods.html(methods.html().replace(/\s+(-&gt;)/g, "\n        $1"));
