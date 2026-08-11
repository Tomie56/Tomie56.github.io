module Jekyll
  module CacheBust
    class CacheDigester
      require "digest/md5"

      def initialize(file_name:, directory: nil)
        @file_name = file_name
        @directory = directory
      end

      def digest!
        [@file_name, "?", Digest::MD5.hexdigest(file_contents)].join
      end

      private

      def file_contents
        return File.read(@file_name.slice((@file_name.index("assets/")..-1))) unless @directory

        Dir[File.join(@directory, "**", "*")]
          .reject { |path| File.directory?(path) }
          .map { |path| File.read(path) }
          .join
      end
    end

    def bust_file_cache(file_name)
      CacheDigester.new(file_name: file_name).digest!
    end

    def bust_css_cache(file_name)
      CacheDigester.new(file_name: file_name, directory: "assets/_sass").digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)
