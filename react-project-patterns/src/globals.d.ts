interface GLOBAL_VARIABLES {
    MODE: string
    BASE_URL: string
    PROD: boolean
}

interface ImportMeta {
    readonly env: GLOBAL_VARIABLES
}