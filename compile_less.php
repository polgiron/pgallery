<?php

// LESS
function auto_compile_less() {

    // include lessc.inc
    require_once(__DIR__ . '/less/lessc.inc.php');

    $inputFile = __DIR__ . '/less/pgallery.less';
    $outputFile = __DIR__ . '/css/pgallery.css';
    $cacheFile = __DIR__ . '/less/cache/pgallery.cache';

    if (file_exists($cacheFile)) {
        $cache = unserialize(file_get_contents($cacheFile));
    } else {
        $cache = $inputFile;
    }

    $less = new lessc;

    $newCache = $less->cachedCompile($cache);

    if (!is_array($cache) || $newCache["updated"] > $cache["updated"]) {
        file_put_contents($cacheFile, serialize($newCache));
        file_put_contents($outputFile, $newCache['compiled']);
    }
}

auto_compile_less();