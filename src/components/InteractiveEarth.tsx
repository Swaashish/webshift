import { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { feature } from "topojson-client";
import { MeshBasicMaterial } from "three";
import world from "world-atlas/countries-110m.json";

export default function InteractiveEarth() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState({
    width: 500,
    height: 500,
  });

  // Convert actual geographic TopoJSON data into GeoJSON.
  const countries = useMemo(() => {
    const geoData = feature(
      world as any,
      (world as any).objects.countries
    ) as any;

    return geoData.features;
  }, []);

  // Dark transparent globe surface.
  const globeMaterial = useMemo(
    () =>
      new MeshBasicMaterial({
        color: "#09090b",
        transparent: true,
        opacity: 0.12,
      }),
    []
  );

  // Responsive sizing.
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;

      setDimensions({
        width: Math.max(250, Math.floor(width)),
        height: Math.max(250, Math.floor(width)),
      });
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Continuous automatic 3D rotation.
  useEffect(() => {
    const globe = globeRef.current;

    if (!globe) return;

    const controls = globe.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    globe.pointOfView(
      {
        lat: 15,
        lng: 15,
        altitude: 2.1,
      },
      0
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-auto h-full w-full cursor-grab active:cursor-grabbing"
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}

        // Transparent canvas.
        backgroundColor="rgba(0,0,0,0)"

        // Actual 3D sphere.
        showGlobe={true}
        globeMaterial={globeMaterial}

        // White latitude and longitude lines.
        showGraticules={true}

        // Remove the default blue atmosphere.
        showAtmosphere={false}

        // Actual country borders.
        polygonsData={countries}
        polygonAltitude={0.001}
        polygonCapColor={() => "rgba(255,255,255,0.005)"}
        polygonSideColor={() => "rgba(255,255,255,0)"}
        polygonStrokeColor={() => "rgba(255,255,255,0.65)"}

        // Smooth transitions.
        polygonsTransitionDuration={0}

        // No unwanted visual interactions.
        enablePointerInteraction={false}
      />
    </div>
  );
}