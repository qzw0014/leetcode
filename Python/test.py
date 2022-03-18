from os import walk
f = []
for (dirpath, dirnames, filenames) in walk('./'):
    print(filenames)