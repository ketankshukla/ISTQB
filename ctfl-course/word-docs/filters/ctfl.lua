-- ctfl.lua
-- Pandoc Lua filter for professional ISTQB CTFL Word document output.
-- Adds page breaks before every Heading 1. Everything else passes through.

function Header(el)
  if el.level == 1 then
    local pagebreak = pandoc.RawBlock("openxml",
      "<w:p><w:pPr><w:pStyle w:val=\"Heading1\"/><w:pageBreakBefore/></w:pPr></w:p>")
    return { pagebreak, el }
  end
  return el
end
