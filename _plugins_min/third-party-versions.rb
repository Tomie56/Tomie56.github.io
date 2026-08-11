Jekyll::Hooks.register :site, :after_init do |site|
  libraries = site.config["third_party_libraries"] || {}

  replace_version = lambda do |value, version|
    case value
    when String
      value.gsub("{{version}}", version.to_s)
    when Hash
      value.each { |key, nested| value[key] = replace_version.call(nested, version) }
      value
    else
      value
    end
  end

  libraries.each do |name, library|
    next if name == "download" || !library.is_a?(Hash) || !library["version"]

    library["url"] = replace_version.call(library["url"], library["version"])
  end
end
