# idf-env

Tool for maintaining ESP-IDF environment.

## Quick start

Install serial drivers for ESP boards on Windows. Execute following command in PowerShell:

```
Invoke-WebRequest 'https://dl.espressif.com/dl/idf-env/idf-env.exe' -OutFile .\idf-env.exe; .\idf-env.exe driver install --ftdi --silabs
```

# Commands

## Working with configuration

File stored in esp_idf.json
```
idf-env config get
idf-env config get --property gitPath
idf-env config get --property python --idf-path "C:/esp/"
idf-env config add --idf-version "v4.2" --idf-path "C:/esp/" --python "C:/python/python.exe"
idf-env config add --name idf --idf-version "v4.2" --idf-path "C:/esp/" --python "C:/python/python.exe"
idf-env config rm id
```

### Working with installations of ESP-IDF
```
idf-env idf install
idf-env idf install --idf-version "master" --installer "G:\idf-installer\build\esp-idf-tools-setup-online-unsigned.exe"
idf-env idf uninstall
idf-env idf reset --path "G:\esp-idf"
```

### Working with Antivirus

```
idf-env antivirus get
idf-env antivirus get --property displayName
idf-env antivirus register --path "C:\....exe"
idf-env antivirus unregister --path "C:\....exe"
```


### Working with drivers

```
idf-env driver get
idf-env driver get --property DeviceID
idf-env driver get --property DeviceID --missing
```

Run in elevated shell - requires Administrator privileges.
Tools will request elevated privileges by UAC if necessary.

```
idf-env driver install --espressif --ftdi --silabs
```

### Web IDE Companion

```
idf-env companion start --port COM7
```