table = {
    foo = "bar"
    bar = "foo"
}

for k, v in ipairs(table) do
    print(k.. v)
end
