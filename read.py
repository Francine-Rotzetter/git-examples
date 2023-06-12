import zlib  # A compression / decompression library
filename = './.git/objects/23/9ec593c6a2192e76c005435f748b2ad28be832'
print(filename)
filename2 = './.git/objects/29/4e673f968d59c591c4a24e83ff194fa966cbe3'
filename3 = './.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391'
compressed_contents = open(filename3, 'rb').read()
decompressed_contents = zlib.decompress(compressed_contents)
print(decompressed_contents)